# `accessContextManagerAuthorizedOrgsDesc` Submodule <a name="`accessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAuthorizedOrgsDesc <a name="AccessContextManagerAuthorizedOrgsDesc" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

new accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc(scope: Construct, id: string, config: AccessContextManagerAuthorizedOrgsDescConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType">resetAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">resetAuthorizationDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs">resetOrgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessContextManagerAuthorizedOrgsDescTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `resetAssetType` <a name="resetAssetType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```typescript
public resetAssetType(): void
```

##### `resetAuthorizationDirection` <a name="resetAuthorizationDirection" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```typescript
public resetAuthorizationDirection(): void
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```typescript
public resetAuthorizationType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgs` <a name="resetOrgs" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```typescript
public resetOrgs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerAuthorizedOrgsDesc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerAuthorizedOrgsDesc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAuthorizedOrgsDesc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">assetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">authorizationDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput">orgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">authorizationDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs">orgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```typescript
public readonly assetTypeInput: string;
```

- *Type:* string

---

##### `authorizationDirectionInput`<sup>Optional</sup> <a name="authorizationDirectionInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```typescript
public readonly authorizationDirectionInput: string;
```

- *Type:* string

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgsInput`<sup>Optional</sup> <a name="orgsInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```typescript
public readonly orgsInput: string[];
```

- *Type:* string[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccessContextManagerAuthorizedOrgsDescTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `authorizationDirection`<sup>Required</sup> <a name="authorizationDirection" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```typescript
public readonly authorizationDirection: string;
```

- *Type:* string

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgs`<sup>Required</sup> <a name="orgs" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```typescript
public readonly orgs: string[];
```

- *Type:* string[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAuthorizedOrgsDescConfig <a name="AccessContextManagerAuthorizedOrgsDescConfig" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

const accessContextManagerAuthorizedOrgsDescConfig: accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name">name</a></code> | <code>string</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent">parent</a></code> | <code>string</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType">assetType</a></code> | <code>string</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">authorizationDirection</a></code> | <code>string</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs">orgs</a></code> | <code>string[]</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `assetType`<sup>Optional</sup> <a name="assetType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `authorizationDirection`<sup>Optional</sup> <a name="authorizationDirection" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```typescript
public readonly authorizationDirection: string;
```

- *Type:* string

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgs`<sup>Optional</sup> <a name="orgs" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```typescript
public readonly orgs: string[];
```

- *Type:* string[]

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerAuthorizedOrgsDescTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### AccessContextManagerAuthorizedOrgsDescTimeouts <a name="AccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

const accessContextManagerAuthorizedOrgsDescTimeouts: accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerAuthorizedOrgsDesc } from '@cdktn/provider-google'

new accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerAuthorizedOrgsDescTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

---



