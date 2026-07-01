# `iamWorkloadIdentityPoolNamespace` Submodule <a name="`iamWorkloadIdentityPoolNamespace` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolNamespace <a name="IamWorkloadIdentityPoolNamespace" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace(scope: Construct, id: string, config: IamWorkloadIdentityPoolNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig">IamWorkloadIdentityPoolNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig">IamWorkloadIdentityPoolNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkloadIdentityPoolNamespaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isConstruct"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPoolNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPoolNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.ownerService">ownerService</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList">IamWorkloadIdentityPoolNamespaceOwnerServiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput">workloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerService`<sup>Required</sup> <a name="ownerService" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.ownerService"></a>

```typescript
public readonly ownerService: IamWorkloadIdentityPoolNamespaceOwnerServiceList;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList">IamWorkloadIdentityPoolNamespaceOwnerServiceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference">IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkloadIdentityPoolNamespaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolNamespaceIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceIdInput"></a>

```typescript
public readonly workloadIdentityPoolNamespaceIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolNamespaceConfig <a name="IamWorkloadIdentityPoolNamespaceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolNamespaceConfig: iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.description">description</a></code> | <code>string</code> | A description of the namespace. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the namespace is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#id IamWorkloadIdentityPoolNamespace#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#project IamWorkloadIdentityPoolNamespace#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#workload_identity_pool_id IamWorkloadIdentityPoolNamespace#workload_identity_pool_id}

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

The ID to use for the namespace.

This value must:
* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id IamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#deletion_policy IamWorkloadIdentityPoolNamespace#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the namespace. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#description IamWorkloadIdentityPoolNamespace#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the namespace is disabled.

If disabled, credentials may no longer be issued for
identities within this namespace, however existing credentials will still be accepted until
they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#disabled IamWorkloadIdentityPoolNamespace#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#id IamWorkloadIdentityPoolNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#project IamWorkloadIdentityPoolNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolNamespaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#timeouts IamWorkloadIdentityPoolNamespace#timeouts}

---

### IamWorkloadIdentityPoolNamespaceOwnerService <a name="IamWorkloadIdentityPoolNamespaceOwnerService" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerService.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolNamespaceOwnerService: iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerService = { ... }
```


### IamWorkloadIdentityPoolNamespaceTimeouts <a name="IamWorkloadIdentityPoolNamespaceTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolNamespaceTimeouts: iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#create IamWorkloadIdentityPoolNamespace#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#delete IamWorkloadIdentityPoolNamespace#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#update IamWorkloadIdentityPoolNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#create IamWorkloadIdentityPoolNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#delete IamWorkloadIdentityPoolNamespace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool_namespace#update IamWorkloadIdentityPoolNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolNamespaceOwnerServiceList <a name="IamWorkloadIdentityPoolNamespaceOwnerServiceList" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.get"></a>

```typescript
public get(index: number): IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference <a name="IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject">principalSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerService">IamWorkloadIdentityPoolNamespaceOwnerService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalSubject`<sup>Required</sup> <a name="principalSubject" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.principalSubject"></a>

```typescript
public readonly principalSubject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkloadIdentityPoolNamespaceOwnerService;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceOwnerService">IamWorkloadIdentityPoolNamespaceOwnerService</a>

---


### IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference <a name="IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolNamespace } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolNamespaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolNamespace.IamWorkloadIdentityPoolNamespaceTimeouts">IamWorkloadIdentityPoolNamespaceTimeouts</a>

---



