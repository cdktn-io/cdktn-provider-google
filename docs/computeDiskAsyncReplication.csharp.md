# `computeDiskAsyncReplication` Submodule <a name="`computeDiskAsyncReplication` Submodule" id="@cdktn/provider-google.computeDiskAsyncReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDiskAsyncReplication <a name="ComputeDiskAsyncReplication" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication google_compute_disk_async_replication}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplication(Construct Scope, string Id, ComputeDiskAsyncReplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk">PutSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecondaryDisk` <a name="PutSecondaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk"></a>

```csharp
private void PutSecondaryDisk(ComputeDiskAsyncReplicationSecondaryDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeDiskAsyncReplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeDiskAsyncReplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeDiskAsyncReplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeDiskAsyncReplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeDiskAsyncReplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeDiskAsyncReplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeDiskAsyncReplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeDiskAsyncReplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeDiskAsyncReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeDiskAsyncReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput">PrimaryDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput">SecondaryDiskInput</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk">PrimaryDisk</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk"></a>

```csharp
public ComputeDiskAsyncReplicationSecondaryDiskOutputReference SecondaryDisk { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts"></a>

```csharp
public ComputeDiskAsyncReplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrimaryDiskInput`<sup>Optional</sup> <a name="PrimaryDiskInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput"></a>

```csharp
public string PrimaryDiskInput { get; }
```

- *Type:* string

---

##### `SecondaryDiskInput`<sup>Optional</sup> <a name="SecondaryDiskInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput"></a>

```csharp
public ComputeDiskAsyncReplicationSecondaryDisk SecondaryDiskInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeDiskAsyncReplicationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk"></a>

```csharp
public string PrimaryDisk { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskAsyncReplicationConfig <a name="ComputeDiskAsyncReplicationConfig" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PrimaryDisk,
    ComputeDiskAsyncReplicationSecondaryDisk SecondaryDisk,
    string Id = null,
    ComputeDiskAsyncReplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk">PrimaryDisk</a></code> | <code>string</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk"></a>

```csharp
public string PrimaryDisk { get; set; }
```

- *Type:* string

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#primary_disk ComputeDiskAsyncReplication#primary_disk}

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk"></a>

```csharp
public ComputeDiskAsyncReplicationSecondaryDisk SecondaryDisk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#secondary_disk ComputeDiskAsyncReplication#secondary_disk}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts"></a>

```csharp
public ComputeDiskAsyncReplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#timeouts ComputeDiskAsyncReplication#timeouts}

---

### ComputeDiskAsyncReplicationSecondaryDisk <a name="ComputeDiskAsyncReplicationSecondaryDisk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplicationSecondaryDisk {
    string Disk
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk">Disk</a></code> | <code>string</code> | Secondary disk for asynchronous replication. |

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk"></a>

```csharp
public string Disk { get; set; }
```

- *Type:* string

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#disk ComputeDiskAsyncReplication#disk}

---

### ComputeDiskAsyncReplicationTimeouts <a name="ComputeDiskAsyncReplicationTimeouts" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplicationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskAsyncReplicationSecondaryDiskOutputReference <a name="ComputeDiskAsyncReplicationSecondaryDiskOutputReference" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplicationSecondaryDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput">DiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk">Disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput"></a>

```csharp
public string DiskInput { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk"></a>

```csharp
public string Disk { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue"></a>

```csharp
public ComputeDiskAsyncReplicationSecondaryDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---


### ComputeDiskAsyncReplicationTimeoutsOutputReference <a name="ComputeDiskAsyncReplicationTimeoutsOutputReference" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeDiskAsyncReplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeDiskAsyncReplicationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---



