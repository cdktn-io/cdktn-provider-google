# `computePreviewFeature` Submodule <a name="`computePreviewFeature` Submodule" id="@cdktn/provider-google.computePreviewFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePreviewFeature <a name="ComputePreviewFeature" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature google_compute_preview_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeature(Construct Scope, string Id, ComputePreviewFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig">ComputePreviewFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig">ComputePreviewFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetRolloutOperation">ResetRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation"></a>

```csharp
private void PutRolloutOperation(ComputePreviewFeatureRolloutOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputePreviewFeatureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRolloutOperation` <a name="ResetRolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetRolloutOperation"></a>

```csharp
private void ResetRolloutOperation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputePreviewFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputePreviewFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputePreviewFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputePreviewFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputePreviewFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputePreviewFeature resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePreviewFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePreviewFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputePreviewFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference">ComputePreviewFeatureRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference">ComputePreviewFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatusInput">ActivationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperation"></a>

```csharp
public ComputePreviewFeatureRolloutOperationOutputReference RolloutOperation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference">ComputePreviewFeatureRolloutOperationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeouts"></a>

```csharp
public ComputePreviewFeatureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference">ComputePreviewFeatureTimeoutsOutputReference</a>

---

##### `ActivationStatusInput`<sup>Optional</sup> <a name="ActivationStatusInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatusInput"></a>

```csharp
public string ActivationStatusInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperationInput"></a>

```csharp
public ComputePreviewFeatureRolloutOperation RolloutOperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputePreviewFeatureTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePreviewFeatureConfig <a name="ComputePreviewFeatureConfig" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ActivationStatus,
    string Name,
    string Id = null,
    string Project = null,
    ComputePreviewFeatureRolloutOperation RolloutOperation = null,
    ComputePreviewFeatureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"]. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.name">Name</a></code> | <code>string</code> | The name of the preview feature. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; set; }
```

- *Type:* string

The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#activation_status ComputePreviewFeature#activation_status}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#name ComputePreviewFeature#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}.

---

##### `RolloutOperation`<sup>Optional</sup> <a name="RolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.rolloutOperation"></a>

```csharp
public ComputePreviewFeatureRolloutOperation RolloutOperation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_operation ComputePreviewFeature#rollout_operation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.timeouts"></a>

```csharp
public ComputePreviewFeatureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#timeouts ComputePreviewFeature#timeouts}

---

### ComputePreviewFeatureRolloutOperation <a name="ComputePreviewFeatureRolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureRolloutOperation {
    ComputePreviewFeatureRolloutOperationRolloutInput RolloutInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.property.rolloutInput"></a>

```csharp
public ComputePreviewFeatureRolloutOperationRolloutInput RolloutInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_input ComputePreviewFeature#rollout_input}

---

### ComputePreviewFeatureRolloutOperationRolloutInput <a name="ComputePreviewFeatureRolloutOperationRolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureRolloutOperationRolloutInput {
    string PredefinedRolloutPlan
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]. |

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; set; }
```

- *Type:* string

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#predefined_rollout_plan ComputePreviewFeature#predefined_rollout_plan}

---

### ComputePreviewFeatureTimeouts <a name="ComputePreviewFeatureTimeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePreviewFeatureRolloutOperationOutputReference <a name="ComputePreviewFeatureRolloutOperationOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureRolloutOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput">ResetRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput"></a>

```csharp
private void PutRolloutInput(ComputePreviewFeatureRolloutOperationRolloutInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `ResetRolloutInput` <a name="ResetRolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput"></a>

```csharp
private void ResetRolloutInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference">ComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput"></a>

```csharp
public ComputePreviewFeatureRolloutOperationRolloutInputOutputReference RolloutInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference">ComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput"></a>

```csharp
public ComputePreviewFeatureRolloutOperationRolloutInput RolloutInputInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.internalValue"></a>

```csharp
public ComputePreviewFeatureRolloutOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

---


### ComputePreviewFeatureRolloutOperationRolloutInputOutputReference <a name="ComputePreviewFeatureRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureRolloutOperationRolloutInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```csharp
public string PredefinedRolloutPlanInput { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```csharp
public ComputePreviewFeatureRolloutOperationRolloutInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

---


### ComputePreviewFeatureTimeoutsOutputReference <a name="ComputePreviewFeatureTimeoutsOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputePreviewFeatureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputePreviewFeatureTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

---



