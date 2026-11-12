# `dataLineageOpenLineageJob` Submodule <a name="`dataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google.dataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageOpenLineageJob <a name="DataLineageOpenLineageJob" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJob(Construct Scope, string Id, DataLineageOpenLineageJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput"></a>

```csharp
private void PutInput(IResolvable|DataLineageOpenLineageJobInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput"></a>

```csharp
private void PutOutput(IResolvable|DataLineageOpenLineageJobOutput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts"></a>

```csharp
private void PutTimeouts(DataLineageOpenLineageJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataLineageOpenLineageJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataLineageOpenLineageJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataLineageOpenLineageJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataLineageOpenLineageJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLineageOpenLineageJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process">Process</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run">Run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput">OutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input"></a>

```csharp
public DataLineageOpenLineageJobInputList Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output"></a>

```csharp
public DataLineageOpenLineageJobOutputList Output { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a>

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process"></a>

```csharp
public string Process { get; }
```

- *Type:* string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run"></a>

```csharp
public string Run { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts"></a>

```csharp
public DataLineageOpenLineageJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInput[] InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutput[] OutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageOpenLineageJobConfig <a name="DataLineageOpenLineageJobConfig" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Namespace,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    IResolvable|DataLineageOpenLineageJobInput[] Input = null,
    IResolvable|DataLineageOpenLineageJobOutput[] Output = null,
    DataLineageOpenLineageJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name">Name</a></code> | <code>string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description">Description</a></code> | <code>string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input">Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output">Output</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInput[] Input { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutput[] Output { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts"></a>

```csharp
public DataLineageOpenLineageJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

### DataLineageOpenLineageJobInput <a name="DataLineageOpenLineageJobInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInput {
    string Name,
    string Namespace,
    DataLineageOpenLineageJobInputCatalog Catalog = null,
    IResolvable|DataLineageOpenLineageJobInputSymlink[] Symlink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name">Name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink">Symlink</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog"></a>

```csharp
public DataLineageOpenLineageJobInputCatalog Catalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInputSymlink[] Symlink { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobInputCatalog <a name="DataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputCatalog {
    string Framework,
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework">Framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name">Name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type">Type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobInputSymlink <a name="DataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputSymlink {
    string Name,
    string Namespace,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name">Name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type">Type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutput <a name="DataLineageOpenLineageJobOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutput {
    string Name,
    string Namespace,
    DataLineageOpenLineageJobOutputCatalog Catalog = null,
    DataLineageOpenLineageJobOutputColumnLineage ColumnLineage = null,
    IResolvable|DataLineageOpenLineageJobOutputSymlink[] Symlink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name">Name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink">Symlink</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog"></a>

```csharp
public DataLineageOpenLineageJobOutputCatalog Catalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `ColumnLineage`<sup>Optional</sup> <a name="ColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineage ColumnLineage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#column_lineage DataLineageOpenLineageJob#column_lineage}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputSymlink[] Symlink { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobOutputCatalog <a name="DataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputCatalog {
    string Framework,
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework">Framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name">Name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type">Type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutputColumnLineage <a name="DataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineage {
    IResolvable|DataLineageOpenLineageJobOutputColumnLineageField[] Field,
    IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field">Field</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | field block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">DatasetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | dataset_input block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageField[] Field { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInput {
    string Field,
    string Name,
    string Namespace,
    IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">Field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">Name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">Transformation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Transformation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation {
    string Type,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">Type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">Subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputColumnLineageField <a name="DataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageField {
    IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput[] Input,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input">Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name">Name</a></code> | <code>string</code> | Output field name. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput[] Input { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInput {
    string Field,
    string Name,
    string Namespace,
    IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">Field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">Name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">Transformation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Transformation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation {
    string Type,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">Type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">Subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputSymlink <a name="DataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputSymlink {
    string Name,
    string Namespace,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name">Name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type">Type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobTimeouts <a name="DataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageOpenLineageJobInputCatalogOutputReference <a name="DataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```csharp
public DataLineageOpenLineageJobInputCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---


### DataLineageOpenLineageJobInputList <a name="DataLineageOpenLineageJobInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get"></a>

```csharp
private DataLineageOpenLineageJobInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---


### DataLineageOpenLineageJobInputOutputReference <a name="DataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(DataLineageOpenLineageJobInputCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```csharp
private void PutSymlink(IResolvable|DataLineageOpenLineageJobInputSymlink[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```csharp
public DataLineageOpenLineageJobInputCatalogOutputReference Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```csharp
public DataLineageOpenLineageJobInputSymlinkList Symlink { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```csharp
public DataLineageOpenLineageJobInputCatalog CatalogInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInputSymlink[] SymlinkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>

---


### DataLineageOpenLineageJobInputSymlinkList <a name="DataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputSymlinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get"></a>

```csharp
private DataLineageOpenLineageJobInputSymlinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInputSymlink[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---


### DataLineageOpenLineageJobInputSymlinkOutputReference <a name="DataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobInputSymlinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobInputSymlink InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>

---


### DataLineageOpenLineageJobOutputCatalogOutputReference <a name="DataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```csharp
public DataLineageOpenLineageJobOutputCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```csharp
private void PutTransformation(IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```csharp
private void ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] TransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```csharp
private void PutTransformation(IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```csharp
private void ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] TransformationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageField[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">PutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```csharp
private void PutInput(IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageFieldInputList Input { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageFieldInput[] InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageField InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>

---


### DataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputColumnLineageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">PutDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">ResetDatasetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetInput` <a name="PutDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```csharp
private void PutDatasetInput(IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `PutField` <a name="PutField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```csharp
private void PutField(IResolvable|DataLineageOpenLineageJobOutputColumnLineageField[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `ResetDatasetInput` <a name="ResetDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```csharp
private void ResetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">Field</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">DatasetInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">FieldInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Required</sup> <a name="DatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageDatasetInputList DatasetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageFieldList Field { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `DatasetInputInput`<sup>Optional</sup> <a name="DatasetInputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageDatasetInput[] DatasetInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputColumnLineageField[] FieldInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---


### DataLineageOpenLineageJobOutputList <a name="DataLineageOpenLineageJobOutputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---


### DataLineageOpenLineageJobOutputOutputReference <a name="DataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage">PutColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">ResetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(DataLineageOpenLineageJobOutputCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `PutColumnLineage` <a name="PutColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```csharp
private void PutColumnLineage(DataLineageOpenLineageJobOutputColumnLineage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```csharp
private void PutSymlink(IResolvable|DataLineageOpenLineageJobOutputSymlink[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetColumnLineage` <a name="ResetColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```csharp
private void ResetColumnLineage()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```csharp
private void ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">ColumnLineageInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```csharp
public DataLineageOpenLineageJobOutputCatalogOutputReference Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `ColumnLineage`<sup>Required</sup> <a name="ColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineageOutputReference ColumnLineage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```csharp
public DataLineageOpenLineageJobOutputSymlinkList Symlink { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```csharp
public DataLineageOpenLineageJobOutputCatalog CatalogInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `ColumnLineageInput`<sup>Optional</sup> <a name="ColumnLineageInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```csharp
public DataLineageOpenLineageJobOutputColumnLineage ColumnLineageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputSymlink[] SymlinkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>

---


### DataLineageOpenLineageJobOutputSymlinkList <a name="DataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputSymlinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get"></a>

```csharp
private DataLineageOpenLineageJobOutputSymlinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputSymlink[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---


### DataLineageOpenLineageJobOutputSymlinkOutputReference <a name="DataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobOutputSymlinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobOutputSymlink InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>

---


### DataLineageOpenLineageJobTimeoutsOutputReference <a name="DataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataLineageOpenLineageJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataLineageOpenLineageJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---



