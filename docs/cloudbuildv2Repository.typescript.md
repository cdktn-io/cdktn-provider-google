# `cloudbuildv2Repository` Submodule <a name="`cloudbuildv2Repository` Submodule" id="@cdktn/provider-google.cloudbuildv2Repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2Repository <a name="Cloudbuildv2Repository" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository google_cloudbuildv2_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

new cloudbuildv2Repository.Cloudbuildv2Repository(scope: Construct, id: string, config: Cloudbuildv2RepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig">Cloudbuildv2RepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig">Cloudbuildv2RepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts"></a>

```typescript
public putTimeouts(value: Cloudbuildv2RepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Cloudbuildv2Repository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Cloudbuildv2Repository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloudbuildv2Repository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloudbuildv2Repository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2Repository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference">Cloudbuildv2RepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnectionInput">parentConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUriInput">remoteUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnection">parentConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUri">remoteUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeouts"></a>

```typescript
public readonly timeouts: Cloudbuildv2RepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference">Cloudbuildv2RepositoryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentConnectionInput`<sup>Optional</sup> <a name="parentConnectionInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnectionInput"></a>

```typescript
public readonly parentConnectionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteUriInput`<sup>Optional</sup> <a name="remoteUriInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUriInput"></a>

```typescript
public readonly remoteUriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Cloudbuildv2RepositoryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentConnection`<sup>Required</sup> <a name="parentConnection" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnection"></a>

```typescript
public readonly parentConnection: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2RepositoryConfig <a name="Cloudbuildv2RepositoryConfig" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.Initializer"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

const cloudbuildv2RepositoryConfig: cloudbuildv2Repository.Cloudbuildv2RepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.name">name</a></code> | <code>string</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.parentConnection">parentConnection</a></code> | <code>string</code> | The connection for the resource. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.remoteUri">remoteUri</a></code> | <code>string</code> | Required. Git Clone HTTPS URI. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#project Cloudbuildv2Repository#project}. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#name Cloudbuildv2Repository#name}

---

##### `parentConnection`<sup>Required</sup> <a name="parentConnection" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.parentConnection"></a>

```typescript
public readonly parentConnection: string;
```

- *Type:* string

The connection for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#parent_connection Cloudbuildv2Repository#parent_connection}

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.remoteUri"></a>

```typescript
public readonly remoteUri: string;
```

- *Type:* string

Required. Git Clone HTTPS URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#remote_uri Cloudbuildv2Repository#remote_uri}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#annotations Cloudbuildv2Repository#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#deletion_policy Cloudbuildv2Repository#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#location Cloudbuildv2Repository#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#project Cloudbuildv2Repository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Cloudbuildv2RepositoryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#timeouts Cloudbuildv2Repository#timeouts}

---

### Cloudbuildv2RepositoryTimeouts <a name="Cloudbuildv2RepositoryTimeouts" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.Initializer"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

const cloudbuildv2RepositoryTimeouts: cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#create Cloudbuildv2Repository#create}. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#delete Cloudbuildv2Repository#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#create Cloudbuildv2Repository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/cloudbuildv2_repository#delete Cloudbuildv2Repository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2RepositoryTimeoutsOutputReference <a name="Cloudbuildv2RepositoryTimeoutsOutputReference" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Repository } from '@cdktn/provider-google'

new cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloudbuildv2RepositoryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

---



