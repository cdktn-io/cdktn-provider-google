# `redisClusterTokenAuthUser` Submodule <a name="`redisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.redisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterTokenAuthUser <a name="RedisClusterTokenAuthUser" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new RedisClusterTokenAuthUser(Construct Scope, string Id, RedisClusterTokenAuthUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts"></a>

```csharp
private void PutTimeouts(RedisClusterTokenAuthUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

RedisClusterTokenAuthUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

RedisClusterTokenAuthUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

RedisClusterTokenAuthUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

RedisClusterTokenAuthUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisClusterTokenAuthUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts"></a>

```csharp
public RedisClusterTokenAuthUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput"></a>

```csharp
public IResolvable|RedisClusterTokenAuthUserTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterTokenAuthUserConfig <a name="RedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new RedisClusterTokenAuthUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cluster,
    string UserId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string Region = null,
    RedisClusterTokenAuthUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster">Cluster</a></code> | <code>string</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId">UserId</a></code> | <code>string</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region">Region</a></code> | <code>string</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts"></a>

```csharp
public RedisClusterTokenAuthUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

### RedisClusterTokenAuthUserTimeouts <a name="RedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new RedisClusterTokenAuthUserTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterTokenAuthUserTimeoutsOutputReference <a name="RedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new RedisClusterTokenAuthUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedisClusterTokenAuthUserTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---



