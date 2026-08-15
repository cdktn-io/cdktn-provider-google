# `iamWorkforcePoolProviderScimToken` Submodule <a name="`iamWorkforcePoolProviderScimToken` Submodule" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderScimToken <a name="IamWorkforcePoolProviderScimToken" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token google_iam_workforce_pool_provider_scim_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

new iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken(scope: Construct, id: string, config: IamWorkforcePoolProviderScimTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig">IamWorkforcePoolProviderScimTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig">IamWorkforcePoolProviderScimTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkforcePoolProviderScimTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProviderScimToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProviderScimToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderScimToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput">scimTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput">scimTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId">scimTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderScimTokenTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `scimTenantIdInput`<sup>Optional</sup> <a name="scimTenantIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput"></a>

```typescript
public readonly scimTenantIdInput: string;
```

- *Type:* string

---

##### `scimTokenIdInput`<sup>Optional</sup> <a name="scimTokenIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput"></a>

```typescript
public readonly scimTokenIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId"></a>

```typescript
public readonly scimTokenId: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderScimTokenConfig <a name="IamWorkforcePoolProviderScimTokenConfig" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

const iamWorkforcePoolProviderScimTokenConfig: iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId">scimTenantId</a></code> | <code>string</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId">scimTokenId</a></code> | <code>string</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#location IamWorkforcePoolProviderScimToken#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#provider_id IamWorkforcePoolProviderScimToken#provider_id}

---

##### `scimTenantId`<sup>Required</sup> <a name="scimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId"></a>

```typescript
public readonly scimTenantId: string;
```

- *Type:* string

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_tenant_id IamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scimTokenId`<sup>Required</sup> <a name="scimTokenId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId"></a>

```typescript
public readonly scimTokenId: string;
```

- *Type:* string

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z]([a-z0-9\\-]{2,30}[a-z0-9]))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_token_id IamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#workforce_pool_id IamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#deletion_policy IamWorkforcePoolProviderScimToken#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#display_name IamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#timeouts IamWorkforcePoolProviderScimToken#timeouts}

---

### IamWorkforcePoolProviderScimTokenTimeouts <a name="IamWorkforcePoolProviderScimTokenTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

const iamWorkforcePoolProviderScimTokenTimeouts: iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderScimTokenTimeoutsOutputReference <a name="IamWorkforcePoolProviderScimTokenTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderScimToken } from '@cdktn/provider-google'

new iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkforcePoolProviderScimTokenTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---



