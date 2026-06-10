# `chronicleDataTable` Submodule <a name="`chronicleDataTable` Submodule" id="@cdktn/provider-google.chronicleDataTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataTable <a name="ChronicleDataTable" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table google_chronicle_data_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTable(Construct Scope, string Id, ChronicleDataTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig">ChronicleDataTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo">PutColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo">PutScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo">ResetColumnInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive">ResetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo">ResetScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnInfo` <a name="PutColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo"></a>

```csharp
private void PutColumnInfo(IResolvable|ChronicleDataTableColumnInfo[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putColumnInfo.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---

##### `PutScopeInfo` <a name="PutScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo"></a>

```csharp
private void PutScopeInfo(ChronicleDataTableScopeInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putScopeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleDataTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---

##### `ResetColumnInfo` <a name="ResetColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetColumnInfo"></a>

```csharp
private void ResetColumnInfo()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRowTimeToLive` <a name="ResetRowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetRowTimeToLive"></a>

```csharp
private void ResetRowTimeToLive()
```

##### `ResetScopeInfo` <a name="ResetScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetScopeInfo"></a>

```csharp
private void ResetScopeInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleDataTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleDataTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleDataTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleDataTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleDataTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleDataTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleDataTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount">ApproximateRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo">ColumnInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid">DataTableUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime">RowTimeToLiveUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount">RuleAssociationsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules">Rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource">UpdateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput">ColumnInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput">DataTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput">RowTimeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput">ScopeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId">DataTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive">RowTimeToLive</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApproximateRowCount`<sup>Required</sup> <a name="ApproximateRowCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.approximateRowCount"></a>

```csharp
public double ApproximateRowCount { get; }
```

- *Type:* double

---

##### `ColumnInfo`<sup>Required</sup> <a name="ColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfo"></a>

```csharp
public ChronicleDataTableColumnInfoList ColumnInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList">ChronicleDataTableColumnInfoList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataTableUuid`<sup>Required</sup> <a name="DataTableUuid" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableUuid"></a>

```csharp
public string DataTableUuid { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RowTimeToLiveUpdateTime`<sup>Required</sup> <a name="RowTimeToLiveUpdateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveUpdateTime"></a>

```csharp
public string RowTimeToLiveUpdateTime { get; }
```

- *Type:* string

---

##### `RuleAssociationsCount`<sup>Required</sup> <a name="RuleAssociationsCount" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.ruleAssociationsCount"></a>

```csharp
public double RuleAssociationsCount { get; }
```

- *Type:* double

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rules"></a>

```csharp
public string[] Rules { get; }
```

- *Type:* string[]

---

##### `ScopeInfo`<sup>Required</sup> <a name="ScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfo"></a>

```csharp
public ChronicleDataTableScopeInfoOutputReference ScopeInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference">ChronicleDataTableScopeInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeouts"></a>

```csharp
public ChronicleDataTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference">ChronicleDataTableTimeoutsOutputReference</a>

---

##### `UpdateSource`<sup>Required</sup> <a name="UpdateSource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateSource"></a>

```csharp
public string UpdateSource { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ColumnInfoInput`<sup>Optional</sup> <a name="ColumnInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.columnInfoInput"></a>

```csharp
public IResolvable|ChronicleDataTableColumnInfo[] ColumnInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---

##### `DataTableIdInput`<sup>Optional</sup> <a name="DataTableIdInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableIdInput"></a>

```csharp
public string DataTableIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RowTimeToLiveInput`<sup>Optional</sup> <a name="RowTimeToLiveInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLiveInput"></a>

```csharp
public string RowTimeToLiveInput { get; }
```

- *Type:* string

---

##### `ScopeInfoInput`<sup>Optional</sup> <a name="ScopeInfoInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.scopeInfoInput"></a>

```csharp
public ChronicleDataTableScopeInfo ScopeInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleDataTableTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---

##### `DataTableId`<sup>Required</sup> <a name="DataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.dataTableId"></a>

```csharp
public string DataTableId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RowTimeToLive`<sup>Required</sup> <a name="RowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.rowTimeToLive"></a>

```csharp
public string RowTimeToLive { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataTableColumnInfo <a name="ChronicleDataTableColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableColumnInfo {
    double ColumnIndex,
    string OriginalColumn,
    string ColumnType = null,
    bool|IResolvable KeyColumn = null,
    string MappedColumnPath = null,
    bool|IResolvable RepeatedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex">ColumnIndex</a></code> | <code>double</code> | Column Index. 0,1,2... |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn">OriginalColumn</a></code> | <code>string</code> | Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads). |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType">ColumnType</a></code> | <code>string</code> | Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn">KeyColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to include this column in the calculation of the row ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath">MappedColumnPath</a></code> | <code>string</code> | Entity proto field path that the column is mapped to. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues">RepeatedValues</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the column is a repeated values column. |

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnIndex"></a>

```csharp
public double ColumnIndex { get; set; }
```

- *Type:* double

Column Index. 0,1,2...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#column_index ChronicleDataTable#column_index}

---

##### `OriginalColumn`<sup>Required</sup> <a name="OriginalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.originalColumn"></a>

```csharp
public string OriginalColumn { get; set; }
```

- *Type:* string

Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads).

It must satisfy the
following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#original_column ChronicleDataTable#original_column}

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#column_type ChronicleDataTable#column_type}

---

##### `KeyColumn`<sup>Optional</sup> <a name="KeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.keyColumn"></a>

```csharp
public bool|IResolvable KeyColumn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to include this column in the calculation of the row ID.

If no columns have key_column = true, all columns will be included in the
calculation of the row ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#key_column ChronicleDataTable#key_column}

---

##### `MappedColumnPath`<sup>Optional</sup> <a name="MappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.mappedColumnPath"></a>

```csharp
public string MappedColumnPath { get; set; }
```

- *Type:* string

Entity proto field path that the column is mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#mapped_column_path ChronicleDataTable#mapped_column_path}

---

##### `RepeatedValues`<sup>Optional</sup> <a name="RepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo.property.repeatedValues"></a>

```csharp
public bool|IResolvable RepeatedValues { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the column is a repeated values column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#repeated_values ChronicleDataTable#repeated_values}

---

### ChronicleDataTableConfig <a name="ChronicleDataTableConfig" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataTableId,
    string Description,
    string Instance,
    string Location,
    IResolvable|ChronicleDataTableColumnInfo[] ColumnInfo = null,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string RowTimeToLive = null,
    ChronicleDataTableScopeInfo ScopeInfo = null,
    ChronicleDataTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId">DataTableId</a></code> | <code>string</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description">Description</a></code> | <code>string</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo">ColumnInfo</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | column_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive">RowTimeToLive</a></code> | <code>string</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo">ScopeInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataTableId`<sup>Required</sup> <a name="DataTableId" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.dataTableId"></a>

```csharp
public string DataTableId { get; set; }
```

- *Type:* string

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#data_table_id ChronicleDataTable#data_table_id}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#description ChronicleDataTable#description}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#instance ChronicleDataTable#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#location ChronicleDataTable#location}

---

##### `ColumnInfo`<sup>Optional</sup> <a name="ColumnInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.columnInfo"></a>

```csharp
public IResolvable|ChronicleDataTableColumnInfo[] ColumnInfo { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#column_info ChronicleDataTable#column_info}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#deletion_policy ChronicleDataTable#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#id ChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#project ChronicleDataTable#project}.

---

##### `RowTimeToLive`<sup>Optional</sup> <a name="RowTimeToLive" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.rowTimeToLive"></a>

```csharp
public string RowTimeToLive { get; set; }
```

- *Type:* string

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#row_time_to_live ChronicleDataTable#row_time_to_live}

---

##### `ScopeInfo`<sup>Optional</sup> <a name="ScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.scopeInfo"></a>

```csharp
public ChronicleDataTableScopeInfo ScopeInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#scope_info ChronicleDataTable#scope_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableConfig.property.timeouts"></a>

```csharp
public ChronicleDataTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#timeouts ChronicleDataTable#timeouts}

---

### ChronicleDataTableScopeInfo <a name="ChronicleDataTableScopeInfo" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableScopeInfo {
    string[] DataAccessScopes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes">DataAccessScopes</a></code> | <code>string[]</code> | Contains the list of scope names of the data table. |

---

##### `DataAccessScopes`<sup>Required</sup> <a name="DataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo.property.dataAccessScopes"></a>

```csharp
public string[] DataAccessScopes { get; set; }
```

- *Type:* string[]

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#data_access_scopes ChronicleDataTable#data_access_scopes}

---

### ChronicleDataTableTimeouts <a name="ChronicleDataTableTimeouts" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#create ChronicleDataTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#delete ChronicleDataTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_data_table#update ChronicleDataTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataTableColumnInfoList <a name="ChronicleDataTableColumnInfoList" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableColumnInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get"></a>

```csharp
private ChronicleDataTableColumnInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleDataTableColumnInfo[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>[]

---


### ChronicleDataTableColumnInfoOutputReference <a name="ChronicleDataTableColumnInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableColumnInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn">ResetKeyColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath">ResetMappedColumnPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues">ResetRepeatedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetColumnType"></a>

```csharp
private void ResetColumnType()
```

##### `ResetKeyColumn` <a name="ResetKeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetKeyColumn"></a>

```csharp
private void ResetKeyColumn()
```

##### `ResetMappedColumnPath` <a name="ResetMappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath"></a>

```csharp
private void ResetMappedColumnPath()
```

##### `ResetRepeatedValues` <a name="ResetRepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.resetRepeatedValues"></a>

```csharp
private void ResetRepeatedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput">ColumnIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput">KeyColumnInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput">MappedColumnPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput">OriginalColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput">RepeatedValuesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex">ColumnIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn">KeyColumn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath">MappedColumnPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn">OriginalColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues">RepeatedValues</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnIndexInput`<sup>Optional</sup> <a name="ColumnIndexInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndexInput"></a>

```csharp
public double ColumnIndexInput { get; }
```

- *Type:* double

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `KeyColumnInput`<sup>Optional</sup> <a name="KeyColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumnInput"></a>

```csharp
public bool|IResolvable KeyColumnInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MappedColumnPathInput`<sup>Optional</sup> <a name="MappedColumnPathInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput"></a>

```csharp
public string MappedColumnPathInput { get; }
```

- *Type:* string

---

##### `OriginalColumnInput`<sup>Optional</sup> <a name="OriginalColumnInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumnInput"></a>

```csharp
public string OriginalColumnInput { get; }
```

- *Type:* string

---

##### `RepeatedValuesInput`<sup>Optional</sup> <a name="RepeatedValuesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput"></a>

```csharp
public bool|IResolvable RepeatedValuesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnIndex"></a>

```csharp
public double ColumnIndex { get; }
```

- *Type:* double

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `KeyColumn`<sup>Required</sup> <a name="KeyColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.keyColumn"></a>

```csharp
public bool|IResolvable KeyColumn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MappedColumnPath`<sup>Required</sup> <a name="MappedColumnPath" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath"></a>

```csharp
public string MappedColumnPath { get; }
```

- *Type:* string

---

##### `OriginalColumn`<sup>Required</sup> <a name="OriginalColumn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.originalColumn"></a>

```csharp
public string OriginalColumn { get; }
```

- *Type:* string

---

##### `RepeatedValues`<sup>Required</sup> <a name="RepeatedValues" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.repeatedValues"></a>

```csharp
public bool|IResolvable RepeatedValues { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleDataTableColumnInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableColumnInfo">ChronicleDataTableColumnInfo</a>

---


### ChronicleDataTableScopeInfoOutputReference <a name="ChronicleDataTableScopeInfoOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableScopeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput">DataAccessScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes">DataAccessScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataAccessScopesInput`<sup>Optional</sup> <a name="DataAccessScopesInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput"></a>

```csharp
public string[] DataAccessScopesInput { get; }
```

- *Type:* string[]

---

##### `DataAccessScopes`<sup>Required</sup> <a name="DataAccessScopes" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes"></a>

```csharp
public string[] DataAccessScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfoOutputReference.property.internalValue"></a>

```csharp
public ChronicleDataTableScopeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableScopeInfo">ChronicleDataTableScopeInfo</a>

---


### ChronicleDataTableTimeoutsOutputReference <a name="ChronicleDataTableTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleDataTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleDataTableTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTable.ChronicleDataTableTimeouts">ChronicleDataTableTimeouts</a>

---



