# `bigqueryRowAccessPolicy` Submodule <a name="`bigqueryRowAccessPolicy` Submodule" id="@cdktn/provider-google.bigqueryRowAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRowAccessPolicy <a name="BigqueryRowAccessPolicy" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy google_bigquery_row_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

new bigqueryRowAccessPolicy.BigqueryRowAccessPolicy(scope: Construct, id: string, config: BigqueryRowAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig">BigqueryRowAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig">BigqueryRowAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetGrantees">resetGrantees</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryRowAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetGrantees` <a name="resetGrantees" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetGrantees"></a>

```typescript
public resetGrantees(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryRowAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryRowAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryRowAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryRowAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryRowAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference">BigqueryRowAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicateInput">filterPredicateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.granteesInput">granteesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicate">filterPredicate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.grantees">grantees</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryRowAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference">BigqueryRowAccessPolicyTimeoutsOutputReference</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `filterPredicateInput`<sup>Optional</sup> <a name="filterPredicateInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicateInput"></a>

```typescript
public readonly filterPredicateInput: string;
```

- *Type:* string

---

##### `granteesInput`<sup>Optional</sup> <a name="granteesInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.granteesInput"></a>

```typescript
public readonly granteesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryRowAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `filterPredicate`<sup>Required</sup> <a name="filterPredicate" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.filterPredicate"></a>

```typescript
public readonly filterPredicate: string;
```

- *Type:* string

---

##### `grantees`<sup>Required</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.grantees"></a>

```typescript
public readonly grantees: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRowAccessPolicyConfig <a name="BigqueryRowAccessPolicyConfig" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.Initializer"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

const bigqueryRowAccessPolicyConfig: bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset containing this row access policy. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.filterPredicate">filterPredicate</a></code> | <code>string</code> | A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.policyId">policyId</a></code> | <code>string</code> | The ID of the row access policy. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table containing this row access policy. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.grantees">grantees</a></code> | <code>string[]</code> | Input only. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#dataset_id BigqueryRowAccessPolicy#dataset_id}

---

##### `filterPredicate`<sup>Required</sup> <a name="filterPredicate" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.filterPredicate"></a>

```typescript
public readonly filterPredicate: string;
```

- *Type:* string

A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table.

References to other tables, routines, and temporary functions are not
supported.

Examples: region="EU"
date_field = CAST('2019-9-27' as DATE)
nullable_field is not NULL
numeric_field BETWEEN 1.0 AND 5.0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#filter_predicate BigqueryRowAccessPolicy#filter_predicate}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The ID of the row access policy.

The ID must contain only
letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#policy_id BigqueryRowAccessPolicy#policy_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table containing this row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#table_id BigqueryRowAccessPolicy#table_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#deletion_policy BigqueryRowAccessPolicy#deletion_policy}

---

##### `grantees`<sup>Optional</sup> <a name="grantees" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.grantees"></a>

```typescript
public readonly grantees: string[];
```

- *Type:* string[]

Input only.

The optional list of iam_member users or groups that specifies the initial
members that the row-level access policy should be created with.

grantees types:
- "user:alice@example.com": An email address that represents a specific
Google account.
- "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email
address that represents a service account.
- "group:admins@example.com": An email address that represents a Google
group.
- "domain:example.com":The Google Workspace domain (primary) that
represents all the users of that domain.
- "allAuthenticatedUsers": A special identifier that represents all service
accounts and all users on the internet who have authenticated with a Google
Account. This identifier includes accounts that aren't connected to a
Google Workspace or Cloud Identity domain, such as personal Gmail accounts.
Users who aren't authenticated, such as anonymous visitors, aren't
included.
- "allUsers":A special identifier that represents anyone who is on
the internet, including authenticated and unauthenticated users. Because
BigQuery requires authentication before a user can access the service,
allUsers includes only authenticated users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#grantees BigqueryRowAccessPolicy#grantees}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#id BigqueryRowAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#project BigqueryRowAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryRowAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#timeouts BigqueryRowAccessPolicy#timeouts}

---

### BigqueryRowAccessPolicyTimeouts <a name="BigqueryRowAccessPolicyTimeouts" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.Initializer"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

const bigqueryRowAccessPolicyTimeouts: bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#create BigqueryRowAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#delete BigqueryRowAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#update BigqueryRowAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#create BigqueryRowAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#delete BigqueryRowAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/bigquery_row_access_policy#update BigqueryRowAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRowAccessPolicyTimeoutsOutputReference <a name="BigqueryRowAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryRowAccessPolicy } from '@cdktn/provider-google'

new bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryRowAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryRowAccessPolicy.BigqueryRowAccessPolicyTimeouts">BigqueryRowAccessPolicyTimeouts</a>

---



