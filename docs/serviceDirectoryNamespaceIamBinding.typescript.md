# `serviceDirectoryNamespaceIamBinding` Submodule <a name="`serviceDirectoryNamespaceIamBinding` Submodule" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDirectoryNamespaceIamBinding <a name="ServiceDirectoryNamespaceIamBinding" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding google_service_directory_namespace_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

new serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding(scope: Construct, id: string, config: ServiceDirectoryNamespaceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig">ServiceDirectoryNamespaceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig">ServiceDirectoryNamespaceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.putCondition"></a>

```typescript
public putCondition(value: ServiceDirectoryNamespaceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceDirectoryNamespaceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isConstruct"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformElement"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformResource"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServiceDirectoryNamespaceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceDirectoryNamespaceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceDirectoryNamespaceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServiceDirectoryNamespaceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference">ServiceDirectoryNamespaceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.condition"></a>

```typescript
public readonly condition: ServiceDirectoryNamespaceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference">ServiceDirectoryNamespaceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ServiceDirectoryNamespaceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDirectoryNamespaceIamBindingCondition <a name="ServiceDirectoryNamespaceIamBindingCondition" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.Initializer"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

const serviceDirectoryNamespaceIamBindingCondition: serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#expression ServiceDirectoryNamespaceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#title ServiceDirectoryNamespaceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#description ServiceDirectoryNamespaceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#expression ServiceDirectoryNamespaceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#title ServiceDirectoryNamespaceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#description ServiceDirectoryNamespaceIamBinding#description}.

---

### ServiceDirectoryNamespaceIamBindingConfig <a name="ServiceDirectoryNamespaceIamBindingConfig" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.Initializer"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

const serviceDirectoryNamespaceIamBindingConfig: serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#members ServiceDirectoryNamespaceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#name ServiceDirectoryNamespaceIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#role ServiceDirectoryNamespaceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#id ServiceDirectoryNamespaceIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#members ServiceDirectoryNamespaceIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#name ServiceDirectoryNamespaceIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#role ServiceDirectoryNamespaceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ServiceDirectoryNamespaceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#condition ServiceDirectoryNamespaceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/service_directory_namespace_iam_binding#id ServiceDirectoryNamespaceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDirectoryNamespaceIamBindingConditionOutputReference <a name="ServiceDirectoryNamespaceIamBindingConditionOutputReference" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { serviceDirectoryNamespaceIamBinding } from '@cdktn/provider-google'

new serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDirectoryNamespaceIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamBinding.ServiceDirectoryNamespaceIamBindingCondition">ServiceDirectoryNamespaceIamBindingCondition</a>

---



