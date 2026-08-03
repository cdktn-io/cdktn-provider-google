# `computeRegionCompositeHealthCheck` Submodule <a name="`computeRegionCompositeHealthCheck` Submodule" id="@cdktn/provider-google.computeRegionCompositeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCompositeHealthCheck <a name="ComputeRegionCompositeHealthCheck" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check google_compute_region_composite_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionCompositeHealthCheck(Construct Scope, string Id, ComputeRegionCompositeHealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig">ComputeRegionCompositeHealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig">ComputeRegionCompositeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources">ResetHealthSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionCompositeHealthCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthSources` <a name="ResetHealthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources"></a>

```csharp
private void ResetHealthSources()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionCompositeHealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionCompositeHealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionCompositeHealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeRegionCompositeHealthCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionCompositeHealthCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionCompositeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionCompositeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput">HealthDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput">HealthSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination">HealthDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources">HealthSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts"></a>

```csharp
public ComputeRegionCompositeHealthCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HealthDestinationInput`<sup>Optional</sup> <a name="HealthDestinationInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput"></a>

```csharp
public string HealthDestinationInput { get; }
```

- *Type:* string

---

##### `HealthSourcesInput`<sup>Optional</sup> <a name="HealthSourcesInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput"></a>

```csharp
public string[] HealthSourcesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeRegionCompositeHealthCheckTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthDestination`<sup>Required</sup> <a name="HealthDestination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination"></a>

```csharp
public string HealthDestination { get; }
```

- *Type:* string

---

##### `HealthSources`<sup>Required</sup> <a name="HealthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources"></a>

```csharp
public string[] HealthSources { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCompositeHealthCheckConfig <a name="ComputeRegionCompositeHealthCheckConfig" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionCompositeHealthCheckConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HealthDestination,
    string Name,
    string Region,
    string DeletionPolicy = null,
    string Description = null,
    string[] HealthSources = null,
    string Project = null,
    ComputeRegionCompositeHealthCheckTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination">HealthDestination</a></code> | <code>string</code> | URL to the destination resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the composite health check resides. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources">HealthSources</a></code> | <code>string[]</code> | URLs to the HealthSource resources whose results are AND'ed. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HealthDestination`<sup>Required</sup> <a name="HealthDestination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination"></a>

```csharp
public string HealthDestination { get; set; }
```

- *Type:* string

URL to the destination resource.

Must be set. Must be a
ForwardingRule. The ForwardingRule must have
load balancing scheme INTERNAL or
INTERNAL_MANAGED and must be regional and in the same region
as the CompositeHealthCheck (cross-region deployment for
INTERNAL_MANAGED is not supported). Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#health_destination ComputeRegionCompositeHealthCheck#health_destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#name ComputeRegionCompositeHealthCheck#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the composite health check resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#region ComputeRegionCompositeHealthCheck#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#deletion_policy ComputeRegionCompositeHealthCheck#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#description ComputeRegionCompositeHealthCheck#description}

---

##### `HealthSources`<sup>Optional</sup> <a name="HealthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources"></a>

```csharp
public string[] HealthSources { get; set; }
```

- *Type:* string[]

URLs to the HealthSource resources whose results are AND'ed.

I.e. he aggregated result is is HEALTHY only if all sources
are HEALTHY. Must have at least 1. Must not have more than 10.
Must be regional and in the same region as the
CompositeHealthCheck. Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#health_sources ComputeRegionCompositeHealthCheck#health_sources}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts"></a>

```csharp
public ComputeRegionCompositeHealthCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#timeouts ComputeRegionCompositeHealthCheck#timeouts}

---

### ComputeRegionCompositeHealthCheckTimeouts <a name="ComputeRegionCompositeHealthCheckTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionCompositeHealthCheckTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCompositeHealthCheckTimeoutsOutputReference <a name="ComputeRegionCompositeHealthCheckTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeRegionCompositeHealthCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeRegionCompositeHealthCheckTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---



