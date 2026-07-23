# `computeWireGroup` Submodule <a name="`computeWireGroup` Submodule" id="@cdktn/provider-google.computeWireGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeWireGroup <a name="ComputeWireGroup" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group google_compute_wire_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroup(Construct Scope, string Id, ComputeWireGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig">ComputeWireGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig">ComputeWireGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties">PutWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetWireProperties">ResetWireProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints"></a>

```csharp
private void PutEndpoints(IResolvable|ComputeWireGroupEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeWireGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---

##### `PutWireProperties` <a name="PutWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties"></a>

```csharp
private void PutWireProperties(ComputeWireGroupWireProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWireProperties` <a name="ResetWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetWireProperties"></a>

```csharp
private void ResetWireProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeWireGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeWireGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeWireGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeWireGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeWireGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeWireGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeWireGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeWireGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeWireGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList">ComputeWireGroupEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference">ComputeWireGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.topology">Topology</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList">ComputeWireGroupTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference">ComputeWireGroupWirePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wires">Wires</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList">ComputeWireGroupWiresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetworkInput">CrossSiteNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpointsInput">EndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wirePropertiesInput">WirePropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetwork">CrossSiteNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpoints"></a>

```csharp
public ComputeWireGroupEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList">ComputeWireGroupEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeouts"></a>

```csharp
public ComputeWireGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference">ComputeWireGroupTimeoutsOutputReference</a>

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.topology"></a>

```csharp
public ComputeWireGroupTopologyList Topology { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList">ComputeWireGroupTopologyList</a>

---

##### `WireProperties`<sup>Required</sup> <a name="WireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wireProperties"></a>

```csharp
public ComputeWireGroupWirePropertiesOutputReference WireProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference">ComputeWireGroupWirePropertiesOutputReference</a>

---

##### `Wires`<sup>Required</sup> <a name="Wires" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wires"></a>

```csharp
public ComputeWireGroupWiresList Wires { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList">ComputeWireGroupWiresList</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabledInput"></a>

```csharp
public bool|IResolvable AdminEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CrossSiteNetworkInput`<sup>Optional</sup> <a name="CrossSiteNetworkInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetworkInput"></a>

```csharp
public string CrossSiteNetworkInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpointsInput"></a>

```csharp
public IResolvable|ComputeWireGroupEndpoints[] EndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeWireGroupTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---

##### `WirePropertiesInput`<sup>Optional</sup> <a name="WirePropertiesInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wirePropertiesInput"></a>

```csharp
public ComputeWireGroupWireProperties WirePropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CrossSiteNetwork`<sup>Required</sup> <a name="CrossSiteNetwork" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetwork"></a>

```csharp
public string CrossSiteNetwork { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeWireGroupConfig <a name="ComputeWireGroupConfig" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CrossSiteNetwork,
    string Name,
    bool|IResolvable AdminEnabled = null,
    string DeletionPolicy = null,
    string Description = null,
    IResolvable|ComputeWireGroupEndpoints[] Endpoints = null,
    string Id = null,
    string Project = null,
    ComputeWireGroupTimeouts Timeouts = null,
    ComputeWireGroupWireProperties WireProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.crossSiteNetwork">CrossSiteNetwork</a></code> | <code>string</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.endpoints">Endpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CrossSiteNetwork`<sup>Required</sup> <a name="CrossSiteNetwork" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.crossSiteNetwork"></a>

```csharp
public string CrossSiteNetwork { get; set; }
```

- *Type:* string

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#cross_site_network ComputeWireGroup#cross_site_network}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#name ComputeWireGroup#name}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#admin_enabled ComputeWireGroup#admin_enabled}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#deletion_policy ComputeWireGroup#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#description ComputeWireGroup#description}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.endpoints"></a>

```csharp
public IResolvable|ComputeWireGroupEndpoints[] Endpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoints ComputeWireGroup#endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.timeouts"></a>

```csharp
public ComputeWireGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#timeouts ComputeWireGroup#timeouts}

---

##### `WireProperties`<sup>Optional</sup> <a name="WireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.wireProperties"></a>

```csharp
public ComputeWireGroupWireProperties WireProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#wire_properties ComputeWireGroup#wire_properties}

---

### ComputeWireGroupEndpoints <a name="ComputeWireGroupEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpoints {
    string Endpoint,
    IResolvable|ComputeWireGroupEndpointsInterconnects[] Interconnects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoint ComputeWireGroup#endpoint}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.interconnects">Interconnects</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]</code> | interconnects block. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoint ComputeWireGroup#endpoint}.

---

##### `Interconnects`<sup>Optional</sup> <a name="Interconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.interconnects"></a>

```csharp
public IResolvable|ComputeWireGroupEndpointsInterconnects[] Interconnects { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnects ComputeWireGroup#interconnects}

---

### ComputeWireGroupEndpointsInterconnects <a name="ComputeWireGroupEndpointsInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpointsInterconnects {
    string InterconnectName,
    string Interconnect = null,
    double[] VlanTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnectName">InterconnectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect_name ComputeWireGroup#interconnect_name}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnect">Interconnect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect ComputeWireGroup#interconnect}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.vlanTags">VlanTags</a></code> | <code>double[]</code> | VLAN tags for the interconnect. |

---

##### `InterconnectName`<sup>Required</sup> <a name="InterconnectName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnectName"></a>

```csharp
public string InterconnectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect_name ComputeWireGroup#interconnect_name}.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnect"></a>

```csharp
public string Interconnect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect ComputeWireGroup#interconnect}.

---

##### `VlanTags`<sup>Optional</sup> <a name="VlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.vlanTags"></a>

```csharp
public double[] VlanTags { get; set; }
```

- *Type:* double[]

VLAN tags for the interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#vlan_tags ComputeWireGroup#vlan_tags}

---

### ComputeWireGroupTimeouts <a name="ComputeWireGroupTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#create ComputeWireGroup#create}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#delete ComputeWireGroup#delete}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#update ComputeWireGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#create ComputeWireGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#delete ComputeWireGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#update ComputeWireGroup#update}.

---

### ComputeWireGroupTopology <a name="ComputeWireGroupTopology" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopology {

};
```


### ComputeWireGroupTopologyEndpoints <a name="ComputeWireGroupTopologyEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopologyEndpoints {

};
```


### ComputeWireGroupWireProperties <a name="ComputeWireGroupWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWireProperties {
    string BandwidthAllocation,
    double BandwidthUnmetered = null,
    string FaultResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>string</code> | The configuration of a wire's bandwidth allocation. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | The unmetered bandwidth setting. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.faultResponse">FaultResponse</a></code> | <code>string</code> | Response when a fault is detected in a pseudowire: NONE: default. |

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthAllocation"></a>

```csharp
public string BandwidthAllocation { get; set; }
```

- *Type:* string

The configuration of a wire's bandwidth allocation.

ALLOCATE_PER_WIRE: configures a separate unmetered bandwidth allocation (and associated charges) for each wire in the group.
SHARED_WITH_WIRE_GROUP: this is the default behavior, which configures one unmetered bandwidth allocation for the wire group. The unmetered bandwidth is divided equally across each wire in the group, but dynamic
throttling reallocates unused unmetered bandwidth from unused or underused wires to other wires in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#bandwidth_allocation ComputeWireGroup#bandwidth_allocation}

---

##### `BandwidthUnmetered`<sup>Optional</sup> <a name="BandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; set; }
```

- *Type:* double

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#bandwidth_unmetered ComputeWireGroup#bandwidth_unmetered}

---

##### `FaultResponse`<sup>Optional</sup> <a name="FaultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.faultResponse"></a>

```csharp
public string FaultResponse { get; set; }
```

- *Type:* string

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#fault_response ComputeWireGroup#fault_response}

---

### ComputeWireGroupWires <a name="ComputeWireGroupWires" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWires {

};
```


### ComputeWireGroupWiresEndpoints <a name="ComputeWireGroupWiresEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresEndpoints {

};
```


### ComputeWireGroupWiresWireProperties <a name="ComputeWireGroupWiresWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresWireProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ComputeWireGroupEndpointsInterconnectsList <a name="ComputeWireGroupEndpointsInterconnectsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpointsInterconnectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get"></a>

```csharp
private ComputeWireGroupEndpointsInterconnectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeWireGroupEndpointsInterconnects[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]

---


### ComputeWireGroupEndpointsInterconnectsOutputReference <a name="ComputeWireGroupEndpointsInterconnectsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpointsInterconnectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags">ResetVlanTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect"></a>

```csharp
private void ResetInterconnect()
```

##### `ResetVlanTags` <a name="ResetVlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags"></a>

```csharp
private void ResetVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput">InterconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput">InterconnectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput">VlanTagsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect">Interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName">InterconnectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags">VlanTags</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput"></a>

```csharp
public string InterconnectInput { get; }
```

- *Type:* string

---

##### `InterconnectNameInput`<sup>Optional</sup> <a name="InterconnectNameInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput"></a>

```csharp
public string InterconnectNameInput { get; }
```

- *Type:* string

---

##### `VlanTagsInput`<sup>Optional</sup> <a name="VlanTagsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput"></a>

```csharp
public double[] VlanTagsInput { get; }
```

- *Type:* double[]

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect"></a>

```csharp
public string Interconnect { get; }
```

- *Type:* string

---

##### `InterconnectName`<sup>Required</sup> <a name="InterconnectName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName"></a>

```csharp
public string InterconnectName { get; }
```

- *Type:* string

---

##### `VlanTags`<sup>Required</sup> <a name="VlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags"></a>

```csharp
public double[] VlanTags { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeWireGroupEndpointsInterconnects InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>

---


### ComputeWireGroupEndpointsList <a name="ComputeWireGroupEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get"></a>

```csharp
private ComputeWireGroupEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeWireGroupEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>[]

---


### ComputeWireGroupEndpointsOutputReference <a name="ComputeWireGroupEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects">PutInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resetInterconnects">ResetInterconnects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterconnects` <a name="PutInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects"></a>

```csharp
private void PutInterconnects(IResolvable|ComputeWireGroupEndpointsInterconnects[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]

---

##### `ResetInterconnects` <a name="ResetInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resetInterconnects"></a>

```csharp
private void ResetInterconnects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnects">Interconnects</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList">ComputeWireGroupEndpointsInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnectsInput">InterconnectsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnects"></a>

```csharp
public ComputeWireGroupEndpointsInterconnectsList Interconnects { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList">ComputeWireGroupEndpointsInterconnectsList</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `InterconnectsInput`<sup>Optional</sup> <a name="InterconnectsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnectsInput"></a>

```csharp
public IResolvable|ComputeWireGroupEndpointsInterconnects[] InterconnectsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeWireGroupEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>

---


### ComputeWireGroupTimeoutsOutputReference <a name="ComputeWireGroupTimeoutsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeWireGroupTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---


### ComputeWireGroupTopologyEndpointsList <a name="ComputeWireGroupTopologyEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopologyEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get"></a>

```csharp
private ComputeWireGroupTopologyEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeWireGroupTopologyEndpointsOutputReference <a name="ComputeWireGroupTopologyEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopologyEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints">ComputeWireGroupTopologyEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupTopologyEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints">ComputeWireGroupTopologyEndpoints</a>

---


### ComputeWireGroupTopologyList <a name="ComputeWireGroupTopologyList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get"></a>

```csharp
private ComputeWireGroupTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeWireGroupTopologyOutputReference <a name="ComputeWireGroupTopologyOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList">ComputeWireGroupTopologyEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology">ComputeWireGroupTopology</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.endpoints"></a>

```csharp
public ComputeWireGroupTopologyEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList">ComputeWireGroupTopologyEndpointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupTopology InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology">ComputeWireGroupTopology</a>

---


### ComputeWireGroupWirePropertiesOutputReference <a name="ComputeWireGroupWirePropertiesOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWirePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered">ResetBandwidthUnmetered</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetFaultResponse">ResetFaultResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthUnmetered` <a name="ResetBandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered"></a>

```csharp
private void ResetBandwidthUnmetered()
```

##### `ResetFaultResponse` <a name="ResetFaultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetFaultResponse"></a>

```csharp
private void ResetFaultResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocationInput">BandwidthAllocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput">BandwidthUnmeteredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput">FaultResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponse">FaultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthAllocationInput`<sup>Optional</sup> <a name="BandwidthAllocationInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocationInput"></a>

```csharp
public string BandwidthAllocationInput { get; }
```

- *Type:* string

---

##### `BandwidthUnmeteredInput`<sup>Optional</sup> <a name="BandwidthUnmeteredInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput"></a>

```csharp
public double BandwidthUnmeteredInput { get; }
```

- *Type:* double

---

##### `FaultResponseInput`<sup>Optional</sup> <a name="FaultResponseInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput"></a>

```csharp
public string FaultResponseInput { get; }
```

- *Type:* string

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocation"></a>

```csharp
public string BandwidthAllocation { get; }
```

- *Type:* string

---

##### `BandwidthUnmetered`<sup>Required</sup> <a name="BandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; }
```

- *Type:* double

---

##### `FaultResponse`<sup>Required</sup> <a name="FaultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponse"></a>

```csharp
public string FaultResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupWireProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---


### ComputeWireGroupWiresEndpointsList <a name="ComputeWireGroupWiresEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get"></a>

```csharp
private ComputeWireGroupWiresEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeWireGroupWiresEndpointsOutputReference <a name="ComputeWireGroupWiresEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.interconnect">Interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints">ComputeWireGroupWiresEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.interconnect"></a>

```csharp
public string Interconnect { get; }
```

- *Type:* string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupWiresEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints">ComputeWireGroupWiresEndpoints</a>

---


### ComputeWireGroupWiresList <a name="ComputeWireGroupWiresList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get"></a>

```csharp
private ComputeWireGroupWiresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeWireGroupWiresOutputReference <a name="ComputeWireGroupWiresOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.adminEnabled">AdminEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList">ComputeWireGroupWiresEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.wireProperties">WireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList">ComputeWireGroupWiresWirePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires">ComputeWireGroupWires</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.adminEnabled"></a>

```csharp
public IResolvable AdminEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.endpoints"></a>

```csharp
public ComputeWireGroupWiresEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList">ComputeWireGroupWiresEndpointsList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `WireProperties`<sup>Required</sup> <a name="WireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.wireProperties"></a>

```csharp
public ComputeWireGroupWiresWirePropertiesList WireProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList">ComputeWireGroupWiresWirePropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupWires InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires">ComputeWireGroupWires</a>

---


### ComputeWireGroupWiresWirePropertiesList <a name="ComputeWireGroupWiresWirePropertiesList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresWirePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get"></a>

```csharp
private ComputeWireGroupWiresWirePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeWireGroupWiresWirePropertiesOutputReference <a name="ComputeWireGroupWiresWirePropertiesOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeWireGroupWiresWirePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered">BandwidthUnmetered</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse">FaultResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties">ComputeWireGroupWiresWireProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthUnmetered`<sup>Required</sup> <a name="BandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```csharp
public double BandwidthUnmetered { get; }
```

- *Type:* double

---

##### `FaultResponse`<sup>Required</sup> <a name="FaultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse"></a>

```csharp
public string FaultResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue"></a>

```csharp
public ComputeWireGroupWiresWireProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties">ComputeWireGroupWiresWireProperties</a>

---



