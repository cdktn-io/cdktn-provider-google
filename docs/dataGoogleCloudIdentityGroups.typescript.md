# `dataGoogleCloudIdentityGroups` Submodule <a name="`dataGoogleCloudIdentityGroups` Submodule" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroups <a name="DataGoogleCloudIdentityGroups" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_groups google_cloud_identity_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig">DataGoogleCloudIdentityGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig">DataGoogleCloudIdentityGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudIdentityGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudIdentityGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList">DataGoogleCloudIdentityGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.groups"></a>

```typescript
public readonly groups: DataGoogleCloudIdentityGroupsGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList">DataGoogleCloudIdentityGroupsGroupsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupsConfig <a name="DataGoogleCloudIdentityGroupsConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupsConfig: dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_groups#parent DataGoogleCloudIdentityGroups#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupsGroups <a name="DataGoogleCloudIdentityGroupsGroups" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupsGroups: dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups = { ... }
```


### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys: dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys = { ... }
```


### DataGoogleCloudIdentityGroupsGroupsGroupKey <a name="DataGoogleCloudIdentityGroupsGroupsGroupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupsGroupsGroupKey: dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys</a>

---


### DataGoogleCloudIdentityGroupsGroupsGroupKeyList <a name="DataGoogleCloudIdentityGroupsGroupsGroupKeyList" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey">DataGoogleCloudIdentityGroupsGroupsGroupKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupsGroupsGroupKey;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey">DataGoogleCloudIdentityGroupsGroupsGroupKey</a>

---


### DataGoogleCloudIdentityGroupsGroupsList <a name="DataGoogleCloudIdentityGroupsGroupsList" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupsGroupsOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroups } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.additionalGroupKeys">additionalGroupKeys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.groupKey">groupKey</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList">DataGoogleCloudIdentityGroupsGroupsGroupKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.initialGroupConfig">initialGroupConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups">DataGoogleCloudIdentityGroupsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalGroupKeys`<sup>Required</sup> <a name="additionalGroupKeys" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.additionalGroupKeys"></a>

```typescript
public readonly additionalGroupKeys: DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.groupKey"></a>

```typescript
public readonly groupKey: DataGoogleCloudIdentityGroupsGroupsGroupKeyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList">DataGoogleCloudIdentityGroupsGroupsGroupKeyList</a>

---

##### `initialGroupConfig`<sup>Required</sup> <a name="initialGroupConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.initialGroupConfig"></a>

```typescript
public readonly initialGroupConfig: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupsGroups;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups">DataGoogleCloudIdentityGroupsGroups</a>

---



