# `oracleDatabaseOdbNetwork` Submodule <a name="`oracleDatabaseOdbNetwork` Submodule" id="@cdktn/provider-google.oracleDatabaseOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbNetwork <a name="OracleDatabaseOdbNetwork" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network google_oracle_database_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbNetwork(Construct Scope, string Id, OracleDatabaseOdbNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig">OracleDatabaseOdbNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig">OracleDatabaseOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseOdbNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseOdbNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OracleDatabaseOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseOdbNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts"></a>

```csharp
public OracleDatabaseOdbNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput"></a>

```csharp
public string OdbNetworkIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleDatabaseOdbNetworkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbNetworkConfig <a name="OracleDatabaseOdbNetworkConfig" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbNetworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Network,
    string OdbNetworkId,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    OracleDatabaseOdbNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network">Network</a></code> | <code>string</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where OdbNetwork is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; set; }
```

- *Type:* string

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#deletion_policy OracleDatabaseOdbNetwork#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where OdbNetwork is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#gcp_oracle_zone OracleDatabaseOdbNetwork#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts"></a>

```csharp
public OracleDatabaseOdbNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

### OracleDatabaseOdbNetworkTimeouts <a name="OracleDatabaseOdbNetworkTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbNetworkTimeoutsOutputReference <a name="OracleDatabaseOdbNetworkTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseOdbNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleDatabaseOdbNetworkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

---



