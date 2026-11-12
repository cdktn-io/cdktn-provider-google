# `secretManagerRegionalSecretManagedRotation` Submodule <a name="`secretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretManagedRotation <a name="SecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation(scope: Construct, id: string, config: SecretManagerRegionalSecretManagedRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">putCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudSqlSingleUserCredentials` <a name="putCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```typescript
public putCloudSqlSingleUserCredentials(value: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```typescript
public putTimeouts(value: SecretManagerRegionalSecretManagedRotationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecretManagedRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">cloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```typescript
public readonly cloudSqlSingleUserCredentials: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```typescript
public readonly rotation: SecretManagerRegionalSecretManagedRotationRotationList;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `cloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="cloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```typescript
public readonly cloudSqlSingleUserCredentialsInput: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">instanceId</a></code> | <code>string</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">username</a></code> | <code>string</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">password</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">passwordWo</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | Triggers update of 'password_wo' write-only. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#instance_id SecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#username SecretManagerRegionalSecretManagedRotation#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password SecretManagerRegionalSecretManagedRotation#password}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo SecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo_version SecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### SecretManagerRegionalSecretManagedRotationConfig <a name="SecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationConfig: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location">location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```typescript
public readonly cloudSqlSingleUserCredentials: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}

---

### SecretManagerRegionalSecretManagedRotationRotation <a name="SecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationRotation: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation = { ... }
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationRotationManagedRotationStatus: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus = { ... }
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError = { ... }
```


### SecretManagerRegionalSecretManagedRotationTimeouts <a name="SecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

const secretManagerRegionalSecretManagedRotationTimeouts: secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```typescript
public resetPasswordWo(): void
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```typescript
public resetPasswordWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```typescript
public readonly passwordWoVersionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### SecretManagerRegionalSecretManagedRotationRotationList <a name="SecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```typescript
public get(index: number): SecretManagerRegionalSecretManagedRotationRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```typescript
public get(index: number): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```typescript
public get(index: number): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```typescript
public readonly error: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### SecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">managedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedRotationStatus`<sup>Required</sup> <a name="managedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```typescript
public readonly managedRotationStatus: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretManagedRotationRotation;
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a>

---


### SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google'

new secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---



